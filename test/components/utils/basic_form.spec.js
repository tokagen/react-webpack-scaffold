import React from 'react';
import { mount } from 'enzyme';
import BasicForm from '../../../js/components/utils/basic_form';

describe('BasicForm', () => {
  let props;
  let mountedBasicForm;
  let handleSubmit;
  const basicForm = () => {
    if (!mountedBasicForm) {
      mountedBasicForm = mount(
        <BasicForm {...props} />
      );
    }
    return mountedBasicForm;
  };

  const basicFormNode = () => {
    return basicForm().node;
  };

  beforeEach(() => {
    handleSubmit = jest.fn();
    props = {
      className: 'test',
      handleSubmit: handleSubmit
    };
    mountedBasicForm = undefined;
  });

  it('renders div', () => {
    expect(basicForm().find('div').length).toEqual(1);
  });

  it('passes props correctly', () => {
    expect(basicForm().find('div').props().className).toEqual(props.className);
    expect(basicForm().find('div').props().onKeyUp).toEqual(basicFormNode().detectReturn);
  });

  describe('detectReturn', () => {

    describe('return key on non-textarea', () => {

      it('calls handeSubmit', () => {
        basicFormNode().detectReturn({
          keyCode: 13,
          target: {
            tagName: 'INPUT'
          }
        });
        expect(handleSubmit).toBeCalled();
      });

    });

    describe('non return key on non-textarea', () => {

      it('calls handeSubmit', () => {
        basicFormNode().detectReturn({
          keyCode: 12,
          target: {
            tagName: 'INPUT'
          }
        });
        expect(handleSubmit).not.toBeCalled();
      });

    });

  });

});

describe('BasicForm.TextInput', () => {
  let props;
  let mountedTextInput;
  let onChange;
  const textInput = () => {
    if (!mountedTextInput) {
      mountedTextInput = mount(
        <BasicForm.TextInput {...props} />
      );
    }
    return mountedTextInput;
  };

  const textInputNode = () => {
    return textInput().node;
  };

  beforeEach(() => {
    onChange = jest.fn();
    props = {
      id: 'id',
      label: 'label',
      onChange: onChange,
      autoFocus: true,
      type: 'text',
      value: 'value'
    };
    mountedTextInput = undefined;
  });

  describe('without errors', () => {

    it('renders div', () => {
      expect(textInput().find('div').length).toEqual(1);
    });

    it('passes props to div correctly', () => {
      expect(textInput().find('div').props().className).toEqual('form-group');
    });

    it('renders label', () => {
      expect(textInput().find('label').length).toEqual(1);
    });

    it('passes props to label correctly', () => {
      let label = textInput().find('label');
      expect(label.props().htmlFor).toEqual(props.id);
      expect(label.text()).toEqual(props.label);
    });

    it('renders input', () => {
      expect(textInput().find('input').length).toEqual(1);
    });

    it('passess props to input correctly', () => {
      let input = textInput().find('input');
      expect(input.props().autoFocus).toEqual(props.autoFocus);
      expect(input.props().type).toEqual(props.type);
      expect(input.props().value).toEqual(props.value);
      expect(input.props().onChange).toEqual(props.onChange);
      expect(input.props().id).toEqual(props.id);
      expect(input.props().className).toEqual('form-control');
    });

  });

  describe('with errors', () => {

    beforeEach(() => {
      props = {
        id: 'id',
        label: 'label',
        onChange: onChange,
        autoFocus: true,
        type: 'text',
        value: 'value',
        errors: ['code']
      };

    });

    it('renders two divs', () => {
      expect(textInput().find('div').length).toEqual(2);
    });

    it('passes props to div correctly', () => {
      let div = textInput().find('.has-danger');
      expect(div.length).toEqual(1);
    });

    it('passes props to input correctly', () => {
      let div = textInput().find('.form-control-danger');
      expect(div.length).toEqual(1);
    });

    it('passes text to error', () => {
      let div = textInput().find('.form-control-feedback');
      expect(div.text()).toEqual(props.errors[0]);
    });

  });

});
