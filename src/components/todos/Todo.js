import React, { Component } from "react";
import { connect } from "react-redux";

export const Todo = (props) => {
	return <li>{props.text}</li>;
};

export default Todo;
