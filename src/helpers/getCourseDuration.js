export const getCourseDuration = (duration) => {
	const timeInMinutes = duration;
	let timeList = [];

	let hours = Math.trunc(timeInMinutes / 60);
	let minutes = timeInMinutes % 60;
	hours < 10 ? timeList.push(`0${hours}`) : timeList.push(`${hours}`);
	minutes < 10 ? timeList.push(`0${minutes}`) : timeList.push(`${minutes}`);

	const transformedTime = `${timeList.join(':')} hours`;
	return transformedTime;
};
