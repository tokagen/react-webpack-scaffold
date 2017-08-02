import { authenticated, unauthenticated } from '../../../js/components/utils/authentication_helper';
import { push } from 'react-router-redux';

describe('authentication helper', function() {

  describe('authenticated', function() {

    describe('with session', function() {

      it('does nothing', function() {
        let props = {
          dispatch: jest.fn(),
          session: 'session'
        };
        authenticated(props);
        expect(props.dispatch).not.toHaveBeenCalled();
      });

    });

    describe('no session', function() {

      it('redirects to login', function() {
        let props = {
          dispatch: jest.fn(),
          session: null
        };
        authenticated(props);
        expect(props.dispatch).toHaveBeenCalledWith(push('/login'));
      });

    });

  });

  describe('unauthenticated', function() {

    describe('with session', function() {

      it('redirects to root', function() {
        let props = {
          dispatch: jest.fn(),
          session: 'session'
        };
        unauthenticated(props);
        expect(props.dispatch).toHaveBeenCalledWith(push('/'));
      });

    });

    describe('no session', function() {

      it('does nothing', function() {
        let props = {
          dispatch: jest.fn(),
          session: null
        };
        unauthenticated(props);
        expect(props.dispatch).not.toHaveBeenCalled();
      });

    });

  });

});
