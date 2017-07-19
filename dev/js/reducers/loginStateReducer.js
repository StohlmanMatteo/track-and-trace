export default function (state='login',action){
	switch(action.type){
		case 'CHANGED_LOGIN_SCREEN':
			return action.payload;
			break;
	}
	return state;
}