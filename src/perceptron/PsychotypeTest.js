const defineOptions = (question) => {
  const defaultOptions = {
    1: 'Да',
    2: 'Скорее "Да"',
    3: 'Затрудняюсь ответить',
    4: 'Скорее, "Нет"',
    5: 'Нет'
  }

  const optionModes = {
    1: defaultOptions
  }

  return optionModes[question.optionMode]
}

const test = [
  {
    quiestionId: 1,
    question: 'Ваши логические умозаключения обоснованны и правильны?',
    optionMode: 1,
  },
  {
    quiestionId: 2,
    question: 'Вы доверяете своему разуму?',
    optionMode: 1,
  },
  {
    quiestionId: 3,
    question: 'Вы проявляете интерес к науке и доказанным фактам?',
    optionMode: 1,
  },
  {
    quiestionId: 4,
    question: 'На ваше мышление не влияет чужое мнение?',
    optionMode: 1,
  },
  {
    quiestionId: 5,
    question: 'Вы строите свою жизнь на основе обдуманных решений?',
    optionMode: 1,
  },
  {
    quiestionId: 6,
    question: 'Вы доверяете логическим умозаключениям?',
    optionMode: 1,
  },
  {
    quiestionId: 7,
    question: 'Появление оригинальной сильной идеи доставляет вам радость?',
    optionMode: 1,
  },
  {
    quiestionId: 8,
    question: 'Во время дискуссий вы чувствуете себя уверенно?',
    optionMode: 1,
  },
  {
    quiestionId: 9,
    question: 'Вас можно назвать вдумчивым человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 10,
    question: 'Вас можно назвать эмоциональным человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 11,
    question: 'Часто ли вы реагируете слезами на события?',
    optionMode: 1,
  },
  {
    quiestionId: 12,
    question: 'Вас можно назвать влюбчивым человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 13,
    question: 'Вы верите астрологам?',
    optionMode: 1,
  },
  {
    quiestionId: 14,
    question: 'Вас можно назвать суеверным человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 15,
    question: 'Ваши чувства и эмоции управляют вами?',
    optionMode: 1,
  },
  {
    quiestionId: 16,
    question: 'Вас можно назвать хорошим актером?',
    optionMode: 1,
  },
  {
    quiestionId: 17,
    question: 'Вам нравятся театральные постановки?',
    optionMode: 1,
  },
  {
    quiestionId: 18,
    question: 'Вы склонны к резкой смене настроения?',
    optionMode: 1,
  },
  {
    quiestionId: 19,
    question: 'Вы в хорошей физической форме?',
    optionMode: 1,
  },
  {
    quiestionId: 20,
    question: 'Считаете ли вы себя гурманом?',
    optionMode: 1,
  },
  {
    quiestionId: 21,
    question: 'Вам нравится активный образ жизни?',
    optionMode: 1,
  },
  {
    quiestionId: 22,
    question: 'Вам нравится заниматься спортом?',
    optionMode: 1,
  },
  {
    quiestionId: 23,
    question: 'Вы серьезно относитесь к деньгам?',
    optionMode: 1,
  },
  {
    quiestionId: 24,
    question: 'Вы стремитесь обладать чем-либо или кем-либо единолично и безраздельно?',
    optionMode: 1,
  },
  {
    quiestionId: 25,
    question: 'Вас можно назвать скупым человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 26,
    question: 'Вы заботитесь о своем здоровье?',
    optionMode: 1,
  },
  {
    quiestionId: 27,
    question: 'Вас можно назвать сексуальным(-ой)?',
    optionMode: 1,
  },
  {
    quiestionId: 28,
    question: 'Вас можно назвать ответственным человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 29,
    question: 'Руководство деятельностью других людей вам дается легко?',
    optionMode: 1,
  },
  {
    quiestionId: 30,
    question: 'Вас можно назвать независимым человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 31,
    question: 'Способны ли вы самостоятельно и своевременно принимать ответственные решения?',
    optionMode: 1,
  },
  {
    quiestionId: 32,
    question: 'Свое поведение вы держите под контролем?',
    optionMode: 1,
  },
  {
    quiestionId: 33,
    question: 'Можно ли вас назвать настойчивым человеком?',
    optionMode: 1,
  },
  {
    quiestionId: 34,
    question: 'Начатые дела вы доводите до конца?',
    optionMode: 1,
  },
  {
    quiestionId: 35,
    question: 'Обладаете ли вы волевыми качествами?',
    optionMode: 1,
  },
  {
    quiestionId: 36,
    question: 'Вы можете вести за собой других людей?',
    optionMode: 1,
  },
].map(defineOptions)

export const PsychotypeData = {
  test
}