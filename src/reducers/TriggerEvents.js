const initialState = {
	clicked_event : 0,
	zerone_event : 0,
	hackathon_event : 0,
	deeplearning_event : 0,
	break_the_circuit : 0,
	technothon_event : 0,
	aavishkar_event : 0,
	bid_bad_event : 0,
	tic_tac_event : 0,
	vbc_event : 0 ,
	quiz_event : 0,
	line_event : 0,
	racing_event : 0,
	climbing_event : 0,
	faceoff_event : 0,
	training_event : 0,
	bridge_event : 0,
}

const events_handle = (state = initialState,action)=>{
	const newState = {...state};
	switch(action.type)
	{
		case 'VIEW':
			newState.clicked_event = 1;
			break;
		case 'CLOSE':
			newState.clicked_event = 0;
			break;
		case 'ZERONEVIEW':
			newState.zerone_event = 1;
			break;
		case 'ZERONECLOSE':
			newState.zerone_event = 0;
			break;
		case 'HACKATHONVIEW':
			newState.hackathon_event = 1;
			break;
		case 'HACKATHONCLOSE':
			newState.hackathon_event = 0;
			break;
		case 'DEEPLEARNINGVIEW':
			newState.deeplearning_event = 1;
			break;
		case 'DEEPLEARNINGCLOSE':
			newState.deeplearning_event = 0;
			break;
		case 'BREAKTHECVIEW' :
			newState.break_the_circuit = 1;
			break;
		case 'BREAKTHECCLOSE' :
			newState.break_the_circuit = 0;
			break;
		case 'TECHNOTHONVIEW' :
			newState.technothon_event = 1;
			break;
		case 'TECHNOTHONCLOSE' :
			newState.technothon_event = 0;
			break;
		case 'AAVISHKARVIEW' :
			newState.aavishkar_event = 1;
			break;
		case 'AAVISHKARCLOSE' :
			newState.aavishkar_event = 0;
			break;
		case 'BID_BADVIEW' :
			newState.bid_bad_event = 1;
			break;
		case 'BID_BADCLOSE' :
			newState.bid_bad_event = 0;
			break;
		case 'TIC_TACVIEW' :
			newState.tic_tac_event = 1;
			break;
		case 'TIC_TACCLOSE' :
			newState.tic_tac_event = 0;
			break;
		case 'VBCVIEW' :
			newState.vbc_event = 1;
			break;
		case 'VBCCLOSE' :
			newState.vbc_event = 0;
			break;
		case 'QUIZVIEW' :
			newState.quiz_event = 1;
			break;
		case 'QUIZCLOSE' :
			newState.quiz_event = 0;
			break;
		case 'LINEVIEW' :
			newState.line_event = 1;
			break;
		case 'LINECLOSE' :
			newState.line_event = 0;
			break;
		case 'RACINGVIEW' :
			newState.racing_event = 1;
			break;
		case 'RACINGCLOSE' :
			newState.racing_event = 0;
			break;
		case 'CLIMBINGVIEW' :
			newState.climbing_event = 1;
			break;
		case 'CLIMBINGCLOSE' :
			newState.climbing_event = 0;
			break;
		case 'FACEOFFVIEW' :
			newState.faceoff_event = 1;
			break;
		case 'FACEOFFCLOSE' :
			newState.faceoff_event = 0;
			break;
		case 'TRAININGVIEW' :
			newState.training_event = 1;
			break;
		case 'TRAININGCLOSE' :
			newState.training_event = 0;
			break;
		case 'BRIDGEVIEW' :
			newState.bridge_event = 1;
			break;
		case 'BRIDGECLOSE' :
			newState.bridge_event = 0;
			break;
		default:
			break;
	}
	return newState;
}

export default events_handle;