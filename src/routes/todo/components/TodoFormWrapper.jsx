import React, { createRef, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Button, WingBlank, WhiteSpace, Toast } from "antd-mobile";
import TodoForm from "./TodoForm";

class TodoFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.form = createRef();
  }

  async componentDidMount() {
    const { initForm } = this.props;
    if (!initForm) return;
    const res = await initForm();
    if (res.start_time) {
      res.start_time = new Date(res.start_time);
    }
    if (res.end_time) {
      res.end_time = new Date(res.end_time);
    }
    this.form.current.setFieldsValue(res);
  }

  validate = () => {
    this.form.current.validateFields(async (err, value) => {
      if (err) return;
      await this.props.onSubmit(value);
      Toast.success("提交成功", 2, () => {
        this.props.history.goBack();
      });
    });
  };

  render() {
    const { btnText } = this.props;
    return (
      <Fragment>
        <TodoForm ref={this.form} />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={this.validate}>
            {btnText}
          </Button>
        </WingBlank>
      </Fragment>
    );
  }
}
export default withRouter(TodoFormWrapper);
