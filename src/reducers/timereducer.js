const initialState={
	now:new Date().getTime(),
	endtime:new Date("Mar 30, 2019 0:0:0").getTime(),
	days:30,
	hours:24,
	minutes:60,
	seconds:60
}

const timerreducer=(state = initialState,action)=>{
	const newTime={...state}; 
	if(action.type === 'GETTIME')
	{
		newTime.now = new Date().getTime();
		let duration = newTime.endtime - newTime.now;
		newTime.days = Math.floor(duration/(1000*60*60*24));
		newTime.hours = Math.floor((duration%(1000*60*60*24))/(1000*60*60));
		newTime.minutes = Math.floor((duration%(1000*60*60))/(1000 * 60));
		newTime.seconds = Math.floor((duration%(1000*60))/1000);
	}
	return newTime;
}

export default timerreducer;