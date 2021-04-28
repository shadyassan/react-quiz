import { Route } from 'react-router-dom';
import Wrapper from './components/shared/Wrapper.jsx';
import QuizList from './containers/QuizList';
import Quiz from './containers/Quiz';

const App = () => {
  return (
    <Wrapper>
      <Route exact path="/" component={QuizList} />
      <Route path="/quiz/:id" component={Quiz} />
    </Wrapper>
  );
};

export default App;
