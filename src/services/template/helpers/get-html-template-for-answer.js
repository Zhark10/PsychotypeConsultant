export const getHtmlTemplateForAnswer = (answer) => {
  const colors = {
    primary: '#000000',
    secondary: '#ffff00'
  }
  const answerId = answer.split('.')[0]
  const answerText = answer.split('.')[1]
  return `
    <body style="
      margin: 0; 
      width: 360; 
      height: 96;
      background-color: ${colors.secondary};
      font-family: Courier New;
    ">
      <div style=" 
        display: flex; 
        align-items: center; 
        justify-content: flex-start; 
        padding: 8px;
        max-width: 320; 
        height: 96;
      ">
        <span style="
          border-radius: 13px;
          min-width: 26px;
          min-height: 26px;
          font-size: 16px;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          background-color: ${colors.primary}; 
          color: ${colors.secondary};
          margin-right: 8px;
        ">
          ${answerId}
        </span>
        <span style="
          color: ${colors.primary};
          font-size: 16px;
          text-align: center;
        ">
          ${answerText}
        </span>
      </div>
    </body>`
}