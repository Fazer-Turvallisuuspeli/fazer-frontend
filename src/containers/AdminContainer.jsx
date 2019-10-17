/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import { callApi } from '../utils/apiUtils';
import {
  CATEGORIES_URL,
  CATEGORY_QUESTIONS_URL,
} from '../constants/apiConstants';

const AdminContainer = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);

  const [newCategoryName, setNewCategoryName] = useState('');
  const [
    newCategoryInstructionsTitle,
    setNewCategoryInstructionsTitle,
  ] = useState('');
  const [
    newCategoryInstructionsBody,
    setNewCategoryInstructionsBody,
  ] = useState('');

  const fetchCategories = useCallback(async () => {
    const categories = await callApi(CATEGORIES_URL);
    setCategories(categories);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const fetchQuestions = async categoryId => {
    // Mock api returns ALL questions even though we only need the ones for a certain category ID
    const questions = await callApi(
      CATEGORY_QUESTIONS_URL.replace(':categoryId', categoryId)
    );

    const categoryQuestions = questions.filter(
      question => question.categoryId === categoryId
    );

    setQuestions(categoryQuestions);
  };

  const handleCategoryChange = target => {
    const { value: categoryIdString } = target;
    const categoryId = Number(categoryIdString);
    if (!categoryId) {
      setSelectedCategory(null);
      setQuestions([]);
      return;
    }

    const category = categories.find(category => category.id === categoryId);
    setSelectedCategory(category);

    fetchQuestions(category.id);
  };

  const resetNewCategory = () => {
    setIsAddingNewCategory(false);
    setNewCategoryName('');
    setNewCategoryInstructionsTitle('');
    setNewCategoryInstructionsBody('');
  };

  const handleNewCategorySubmit = async event => {
    event.preventDefault();

    const newCategory = {
      name: newCategoryName,
      instructions: [
        {
          title: newCategoryInstructionsTitle,
          body: newCategoryInstructionsBody,
        },
      ],
    };

    await callApi(CATEGORIES_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory),
    });

    fetchCategories();
    resetNewCategory();
  };

  return (
    <div>
      <h1>Admin Paneeli</h1>

      <div>
        <div>
          <label htmlFor="category-select">
            Kategoria:
            <select
              name="category-select"
              onChange={({ target }) => handleCategoryChange(target)}>
              <option>Valitse kategoria</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          {!isAddingNewCategory && (
            <button type="button" onClick={() => setIsAddingNewCategory(true)}>
              Lisää uusi kategoria
            </button>
          )}

          {isAddingNewCategory && (
            <div>
              <form onSubmit={event => handleNewCategorySubmit(event)}>
                <div>
                  <label htmlFor="input-category-name">
                    Kategorian nimi
                    <input
                      type="text"
                      id="input-category-name"
                      value={newCategoryName}
                      onChange={({ target }) =>
                        setNewCategoryName(target.value)
                      }
                    />
                  </label>
                </div>

                <div>
                  <h3>Ohjeet</h3>

                  <div>
                    <div>
                      <label htmlFor="input-category-instructions-title">
                        Otsikko
                        <input
                          type="text"
                          id="input-category-instructions-title"
                          value={newCategoryInstructionsTitle}
                          onChange={({ target }) =>
                            setNewCategoryInstructionsTitle(target.value)
                          }
                        />
                      </label>
                    </div>

                    <div>
                      <label htmlFor="input-category-instructions-body">
                        Leipäteksti
                        <textarea
                          type="text"
                          id="input-category-instructions-body"
                          value={newCategoryInstructionsBody}
                          onChange={({ target }) =>
                            setNewCategoryInstructionsBody(target.value)
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button type="button" onClick={resetNewCategory}>
                    Hylkää
                  </button>
                  <input type="submit" value="Tallenna" />
                </div>
              </form>
            </div>
          )}
        </div>

        {selectedCategory && (
          <div>
            <h3>Kysymykset:</h3>
            {questions.map(question => (
              <div key={question.id}>
                <h4>{question.question}</h4>
                {question.choices.map((choice, index) => (
                  <p key={choice.id}>
                    {index + 1}) {choice.option}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContainer;
