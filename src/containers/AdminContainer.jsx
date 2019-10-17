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

  const fetchCategories = useCallback(async () => {
    const categories = await callApi(CATEGORIES_URL);
    setCategories(categories);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleCategoryChange = target => {
    const { value: categoryIdString } = target;
    const categoryId = Number(categoryIdString);

    const category = categories.find(category => category.id === categoryId);

    setSelectedCategory(category);
  };

  const [questions, setQuestions] = useState([]);

  const fetchQuestions = useCallback(async () => {
    const { id: selectedCategoryId } = selectedCategory;

    const categoryQuestions = await callApi(
      CATEGORY_QUESTIONS_URL.replace(':categoryId', selectedCategoryId)
    );

    setQuestions(categoryQuestions);
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedCategory) return;

    fetchQuestions();
  }, [selectedCategory, fetchQuestions]);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionChange = target => {
    const { value: selectedQuestionIdString } = target;
    const selectedQuestionId = Number(selectedQuestionIdString);

    const selectedQuestion = questions.find(
      question => question.id === selectedQuestionId
    );

    setSelectedQuestion(selectedQuestion);
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
        </div>

        {selectedCategory && (
          <>
            <div>
              <label htmlFor="question-select">
                Kysymys:
                <select
                  name="question-select"
                  onChange={({ target }) => handleQuestionChange(target)}>
                  <option>Valitse kysymys</option>
                  {questions.map(question => (
                    <option key={question.id} value={question.id}>
                      {question.question}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {selectedQuestion && (
              <div>
                <label htmlFor="choice-select">
                  Vastausvaihtoehto:
                  <select name="choice-select">
                    <option>Valitse vastausvaihtoehto</option>
                    {selectedQuestion.choices.map((choice, index) => (
                      <option key={choice.id}>
                        {index + 1}) {choice.option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminContainer;
