import * as Yup from 'yup';

const FILE_SIZE = 1000 * 1000 * 10;

const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif'];

const validationSchema = Yup.object({
  subject: Yup.string().required('* 프로젝트 이름은 필수 항목입니다.'),
  planIntention: Yup.string()
    .max(200, '기획의도는 200자 이내여야 합니다.')
    .required('* 기획의도는 필수 항목입니다.'),
  startDate: Yup.date().required('* 시작날짜는 필수 항목입니다.'),
  endDate: Yup.date().required('* 종료날짜는 필수 항목입니다.'),
  deployUrl: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    '형식에 맞는 URL을 작성해주세요!'
  ),
  githubUrl: Yup.string().matches(
    /^https:\/\/github.com\/[\w-]+\/[\w-]+$/,
    '형식에 맞는 URL을 작성해주세요!'
  ),
  thumbnail: Yup.mixed()
    .test(
      'fileType',
      '지원하지않는 파일형식입니다. (지원하는 파일 형식: jpeg, png, jpg, webp, gif)',
      value => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    )
    .test(
      'fileSize',
      '파일 크기가 너무 큽니다. (최대 10MB)',
      value => value === null || (value && value.size <= FILE_SIZE)
    )
    .required('* 프로젝트 썸네일은 필수 항목입니다.'),
});

export default validationSchema;
