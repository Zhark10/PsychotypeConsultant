export const defineOptionsByMode = (testItem) => {
  const OptionAdapter = (options) => {
    const values = Object.values(options)
    const formattedOptions = Object.keys(options).map((answerId, index) => {
      return [{ text: values[index], callback_data: answerId }]
    })
    return {
      reply_markup: JSON.stringify({
        inline_keyboard: formattedOptions
      })
    }
  }

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
    question: `${testItem.questionId}. ${testItem.question}`,
    options: OptionAdapter(optionModes[testItem.optionMode])
  }
}