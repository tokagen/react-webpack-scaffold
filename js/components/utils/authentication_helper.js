import { push } from 'react-router-redux';

export function authenticated (props) {
  if(!props.session) {
    props.dispatch(push('/login'))
  }
}

export function unauthenticated (props) {
  if(props.session) {
    props.dispatch(push('/'))
  }
}
