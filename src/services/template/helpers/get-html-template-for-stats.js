export const getHtmlTemplateForStats = (results, calculatedHeight) => {
  const colors = {
    primary: '#000000',
    secondary: '#ffff00',
  }

  const renderStats = () => {
    return results
      .map(
        (result) =>
          `<div style=" 
        display: flex; 
        align-items: center; 
        height: 18px;
        font-size: 16px;
        color: ${colors.primary};
      ">
          ${result}
      </div>`
      )
      .join('')
  }

  return `
    <body style="
      margin: 0; 
      width: 360; 
      height: ${calculatedHeight};
      background-color: ${colors.secondary};
      font-family: Courier New;
      padding: 12px 12px 4px;
    ">
      <div style="
        position: fixed;
        height: 520px;
        width: 520px;
        border: 150px solid rgba(0,0,0,0.08);
        top: -80px;
        left: 0;
        border-radius: 50%;
      "></div>
      <div style=" 
        display: block; 
        height: 24px;
        font-size: 16px;
        color: ${colors.primary};
        text-align: center;
        margin-bottom: 12px;
        font-weight: bold;
      ">
          Статистика по кандидатам
      </div>
      ${renderStats()}
    </body>`
}
