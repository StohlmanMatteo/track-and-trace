export const updateLoginScreen = (type) =>{
	console.log('Update Login Screen was Clicked');
	return{
		type: "CHANGED_LOGIN_SCREEN",
		payload: type
	}
};

export const updateActiveLoad = (activeLoad) =>{
	console.log('Update Active Load');
	return{
		type: "ACTIVE_LOAD_UPDATED",
		payload: activeLoad
	}
};