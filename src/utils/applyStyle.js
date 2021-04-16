const applyStyle = styleUnit => {
  if (typeof styleUnit === 'string') return styleUnit;
  else if (typeof styleUnit === 'number') return `${styleUnit}px`;
  throw new TypeError(
    '적용 할 스타일의 단위는 number나 string 타입으로만 입력해주세요. number값을 입력하면 기본적으로 px단위가 적용됩니다.'
  );
};

export default applyStyle;
