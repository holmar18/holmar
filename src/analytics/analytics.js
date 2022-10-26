// Google anal.
import ReactGa from 'react-ga';

/**
 *  All functions in this document are part of Google analytics
 *  to gather data from the website
 *
 *  Data beeing monitored
 *  1) Download of CV
 *  2) Contact button clicked
 *  3) Project demo buttons clicked
 *  4) Projects github buttons clicked
 */

/**
 *
 * @param {catagory of clicked item} category
 * @param {action done} action
 * @param {label for the action} label
 * @param {value such as CV,price etc} value
 */
export const analyticsClickEvent = (category, action, label, value) => {
	ReactGa.event({
		category: category,
		action: action,
		label: label,
		value: value,
	});
};
