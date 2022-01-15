const optionAdapter = (options) => {
  const formattedOptions = Object.values(options).map((option, optionId) => {
    return [{ text: option, callback_data: optionId }]
  })
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: formattedOptions
    })
  }
}

export const defineOptionsByMode = (testItem) => {
  const defaultOptions = {
    1: 'Да',
    2: 'Скорее "Да"',
    3: 'Затрудняюсь ответить',
    4: 'Скорее, "Нет"',
    5: 'Нет',
  }

  const optionModes = {
    1: defaultOptions
  }

  return {
    questionId: testItem.questionId,
    question: testItem.question,
    options: optionAdapter(optionModes[testItem.optionMode])
  }
}