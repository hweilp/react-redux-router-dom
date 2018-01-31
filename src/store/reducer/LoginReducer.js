import * as Types from '../types';

let initState = {
	text : '登录'
};

const LoginReducer = (state = initState, action) => {
	switch (action.type) {
		case Types.SHOW_LOGIN_PAGE :
			return {...state,text : '登录页出现'};
		default :
			return state;
	}
};

export default LoginReducer;