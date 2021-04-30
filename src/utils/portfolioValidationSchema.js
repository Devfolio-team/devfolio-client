import * as Yup from 'yup';

const portfolioValidationSchema = Yup.object({
  githubUrl: Yup.string().matches(
    /((https?):\/\/)?github.com\/[\w-]+$/,
    '형식에 맞는 URL을 작성해주세요!'
  ),
  email: Yup.string().email('이메일 형식에 맞는 이메일 주소를 작성해주세요!'),
  blogUrl: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#@_%-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    '형식에 맞는 URL을 작성해주세요!'
  ),
});

export default portfolioValidationSchema;
