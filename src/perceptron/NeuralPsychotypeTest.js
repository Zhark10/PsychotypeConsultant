const defineOptionsByMode = (testItem) => {
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

const test = [
  {
    questionId: 1,
    question: 'Ваши логические умозаключения обоснованны и правильны?',
    optionMode: 1,
  },
  {
    questionId: 2,
    question: 'Вы доверяете своему разуму?',
    optionMode: 1,
  },
  {
    questionId: 3,
    question: 'Вы проявляете интерес к науке и доказанным фактам?',
    optionMode: 1,
  },
  {
    questionId: 4,
    question: 'На ваше мышление не влияет чужое мнение?',
    optionMode: 1,
  },
  {
    questionId: 5,
    question: 'Вы строите свою жизнь на основе обдуманных решений?',
    optionMode: 1,
  },
  {
    questionId: 6,
    question: 'Вы доверяете логическим умозаключениям?',
    optionMode: 1,
  },
  // {
  //   questionId: 7,
  //   question: 'Появление оригинальной сильной идеи доставляет вам радость?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 8,
  //   question: 'Во время дискуссий вы чувствуете себя уверенно?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 9,
  //   question: 'Вас можно назвать вдумчивым человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 10,
  //   question: 'Вас можно назвать эмоциональным человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 11,
  //   question: 'Часто ли вы реагируете слезами на события?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 12,
  //   question: 'Вас можно назвать влюбчивым человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 13,
  //   question: 'Вы верите астрологам?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 14,
  //   question: 'Вас можно назвать суеверным человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 15,
  //   question: 'Ваши чувства и эмоции управляют вами?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 16,
  //   question: 'Вас можно назвать хорошим актером?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 17,
  //   question: 'Вам нравятся театральные постановки?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 18,
  //   question: 'Вы склонны к резкой смене настроения?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 19,
  //   question: 'Вы в хорошей физической форме?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 20,
  //   question: 'Считаете ли вы себя гурманом?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 21,
  //   question: 'Вам нравится активный образ жизни?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 22,
  //   question: 'Вам нравится заниматься спортом?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 23,
  //   question: 'Вы серьезно относитесь к деньгам?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 24,
  //   question: 'Вы стремитесь обладать чем-либо или кем-либо единолично и безраздельно?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 25,
  //   question: 'Вас можно назвать скупым человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 26,
  //   question: 'Вы заботитесь о своем здоровье?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 27,
  //   question: 'Вас можно назвать сексуальным(-ой)?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 28,
  //   question: 'Вас можно назвать ответственным человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 29,
  //   question: 'Руководство деятельностью других людей вам дается легко?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 30,
  //   question: 'Вас можно назвать независимым человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 31,
  //   question: 'Способны ли вы самостоятельно и своевременно принимать ответственные решения?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 32,
  //   question: 'Свое поведение вы держите под контролем?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 33,
  //   question: 'Можно ли вас назвать настойчивым человеком?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 34,
  //   question: 'Начатые дела вы доводите до конца?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 35,
  //   question: 'Обладаете ли вы волевыми качествами?',
  //   optionMode: 1,
  // },
  // {
  //   questionId: 36,
  //   question: 'Вы можете вести за собой других людей?',
  //   optionMode: 1,
  // },
].map(defineOptionsByMode)

export const PsychotypeData = {
  test
}