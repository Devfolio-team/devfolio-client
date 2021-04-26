import { number, string, oneOfType } from 'prop-types';
import { ReactComponent as Express } from 'assets/Express.svg';
import { ReactComponent as Javascript } from 'assets/Javascript.svg';
import { ReactComponent as MySQL } from 'assets/MySQL.svg';
import { ReactComponent as React } from 'assets/React.svg';
import { ReactComponent as Redux } from 'assets/Redux.svg';
import { ReactComponent as Sass } from 'assets/Sass.svg';
import { ReactComponent as StyledComponent } from 'assets/StyledComponent.svg';
import { ReactComponent as Typescript } from 'assets/Typescript.svg';
import { ReactComponent as Apache } from 'assets/Apache.svg';
import { ReactComponent as AWSS3 } from 'assets/AWSS3.svg';
import { ReactComponent as AWSEC2 } from 'assets/AWSEC2.svg';
import { ReactComponent as AWSRDS } from 'assets/AWSRDS.svg';
import { ReactComponent as C } from 'assets/C.svg';
import { ReactComponent as CSHARP } from 'assets/CSHARP.svg';
import { ReactComponent as CPP } from 'assets/CPP.svg';
import { ReactComponent as Css3 } from 'assets/Css3.svg';
import { ReactComponent as Dart } from 'assets/Dart.svg';
import { ReactComponent as Django } from 'assets/Django.svg';
import { ReactComponent as Electron } from 'assets/Electron.svg';
import { ReactComponent as Firebase } from 'assets/Firebase.svg';
import { ReactComponent as Flutter } from 'assets/Flutter.svg';
import { ReactComponent as GraphQL } from 'assets/GraphQL.svg';
import { ReactComponent as Html5 } from 'assets/Html5.svg';
import { ReactComponent as Java } from 'assets/Java.svg';
import { ReactComponent as Jest } from 'assets/Jest.svg';
import { ReactComponent as Mobx } from 'assets/Mobx.svg';
import { ReactComponent as MongoDB } from 'assets/MongoDB.svg';
import { ReactComponent as NextJS } from 'assets/NextJS.svg';
import { ReactComponent as NodeJS } from 'assets/NodeJS.svg';
import { ReactComponent as Prisma } from 'assets/Prisma.svg';
import { ReactComponent as Python } from 'assets/Python.svg';
import { ReactComponent as Ruby } from 'assets/Ruby.svg';
import { ReactComponent as Scala } from 'assets/Scala.svg';
import { ReactComponent as Spring } from 'assets/Spring.svg';
import { ReactComponent as Vue } from 'assets/Vue.svg';
import { ReactComponent as Angular } from 'assets/Angular.svg';
import { ReactComponent as Aws } from 'assets/Aws.svg';
import { ReactComponent as Bootstrap } from 'assets/Bootstrap.svg';
import { ReactComponent as CouchDB } from 'assets/CouchDB.svg';
import { ReactComponent as DynamoDB } from 'assets/DynamoDB.svg';
import { ReactComponent as Git } from 'assets/Git.svg';
import { ReactComponent as Github } from 'assets/Github.svg';
import { ReactComponent as Jekyll } from 'assets/Jekyll.svg';
import { ReactComponent as JQuery } from 'assets/JQuery.svg';
import { ReactComponent as Linux } from 'assets/Linux.svg';
import { ReactComponent as MariaDB } from 'assets/MariaDB.svg';
import { ReactComponent as MaterialUI } from 'assets/MaterialUI.svg';
import { ReactComponent as Oracle } from 'assets/Oracle.svg';
import { ReactComponent as PostCSS } from 'assets/PostCSS.svg';
import { ReactComponent as Redis } from 'assets/Redis.svg';
import { ReactComponent as RethinkDB } from 'assets/RethinkDB.svg';
import { ReactComponent as Rollup } from 'assets/Rollup.svg';
import { ReactComponent as RxJS } from 'assets/RxJS.svg';
import { ReactComponent as Svelte } from 'assets/Svelte.svg';
import { ReactComponent as TailwindCSS } from 'assets/TailwindCSS.svg';
import { ReactComponent as Tomcat } from 'assets/Tomcat.svg';
import { ReactComponent as Webpack } from 'assets/Webpack.svg';
import { ReactComponent as Firestore } from 'assets/Firestore.svg';

const SkillIcon = ({ type, ...restProps }) => {
  let SkillIcon = null;
  switch (type.toUpperCase()) {
    default:
    case 'EXPRESS':
      SkillIcon = Express;
      break;
    case 'JAVASCRIPT':
      SkillIcon = Javascript;
      break;
    case 'MYSQL':
      SkillIcon = MySQL;
      break;
    case 'REACT':
      SkillIcon = React;
      break;
    case 'REDUX':
      SkillIcon = Redux;
      break;
    case 'SASS':
      SkillIcon = Sass;
      break;
    case 'STYLEDCOMPONENT':
      SkillIcon = StyledComponent;
      break;
    case 'APACHE':
      SkillIcon = Apache;
      break;
    case 'TYPESCRIPT':
      SkillIcon = Typescript;
      break;
    case 'AWSS3':
      SkillIcon = AWSS3;
      break;
    case 'AWSEC2':
      SkillIcon = AWSEC2;
      break;
    case 'AWSRDS':
      SkillIcon = AWSRDS;
      break;
    case 'C':
      SkillIcon = C;
      break;
    case 'CSHARP':
      SkillIcon = CSHARP;
      break;
    case 'CPP':
      SkillIcon = CPP;
      break;
    case 'CSS3':
      SkillIcon = Css3;
      break;
    case 'DART':
      SkillIcon = Dart;
      break;
    case 'DJANGO':
      SkillIcon = Django;
      break;
    case 'ELECTRON':
      SkillIcon = Electron;
      break;
    case 'FIREBASE':
      SkillIcon = Firebase;
      break;
    case 'FLUTTER':
      SkillIcon = Flutter;
      break;
    case 'GRAPHQL':
      SkillIcon = GraphQL;
      break;
    case 'HTML5':
      SkillIcon = Html5;
      break;
    case 'JAVA':
      SkillIcon = Java;
      break;
    case 'JEST':
      SkillIcon = Jest;
      break;
    case 'MOBX':
      SkillIcon = Mobx;
      break;
    case 'MONGODB':
      SkillIcon = MongoDB;
      break;
    case 'NEXTJS':
      SkillIcon = NextJS;
      break;
    case 'NODEJS':
      SkillIcon = NodeJS;
      break;
    case 'PRISMA':
      SkillIcon = Prisma;
      break;
    case 'PYTHON':
      SkillIcon = Python;
      break;
    case 'RUBY':
      SkillIcon = Ruby;
      break;
    case 'SCALA':
      SkillIcon = Scala;
      break;
    case 'SPRING':
      SkillIcon = Spring;
      break;
    case 'VUE':
      SkillIcon = Vue;
      break;
    case 'ANGULAR':
      SkillIcon = Angular;
      break;
    case 'AWS':
      SkillIcon = Aws;
      break;
    case 'BOOTSTRAP':
      SkillIcon = Bootstrap;
      break;
    case 'COUCHDB':
      SkillIcon = CouchDB;
      break;
    case 'DYNAMODB':
      SkillIcon = DynamoDB;
      break;
    case 'GIT':
      SkillIcon = Git;
      break;
    case 'GITHUB':
      SkillIcon = Github;
      break;
    case 'JEKYLL':
      SkillIcon = Jekyll;
      break;
    case 'JQUERY':
      SkillIcon = JQuery;
      break;
    case 'LINUX':
      SkillIcon = Linux;
      break;
    case 'MARIADB':
      SkillIcon = MariaDB;
      break;
    case 'MATERIALUI':
      SkillIcon = MaterialUI;
      break;
    case 'ORACLE':
      SkillIcon = Oracle;
      break;
    case 'POSTCSS':
      SkillIcon = PostCSS;
      break;
    case 'REDIS':
      SkillIcon = Redis;
      break;
    case 'RETHINKDB':
      SkillIcon = RethinkDB;
      break;
    case 'ROLLUP':
      SkillIcon = Rollup;
      break;
    case 'RXJS':
      SkillIcon = RxJS;
      break;
    case 'SVELTE':
      SkillIcon = Svelte;
      break;
    case 'TAILWINDCSS':
      SkillIcon = TailwindCSS;
      break;
    case 'TOMCAT':
      SkillIcon = Tomcat;
      break;
    case 'WEBPACK':
      SkillIcon = Webpack;
      break;
    case 'FIRESTORE':
      SkillIcon = Firestore;
      break;
  }
  return <SkillIcon {...restProps} />;
};

SkillIcon.defaultProps = {
  type: 'REACT',
};

SkillIcon.propTypes = {
  /** SkillIcon에 적용 할 width를 설정합니다. */
  width: oneOfType([string, number]),
  /** SkillIcon에 적용 할 height를 설정합니다. */
  height: oneOfType([string, number]),
  /** SkillIconn에 적용 할 type를 설정합니다. */
  type: string.isRequired,
  /** SkillIcon에 적용 할 색상을 설정합니다. */
  fill: string,
};

export default SkillIcon;
