import React from 'react';
import CV from '../../assets/Holmar-Karl-Holmarsson-CV.pdf';
// Google analytics
import { analyticsClickEvent } from '../../analytics/analytics';

/**
 *
 * Download CV & contact button in header
 *
 */
const CTA = () => {
	return (
		<div className='cta'>
			<a
				href={CV}
				className='btn'
				onClick={() =>
					analyticsClickEvent('download', 'Btn click', 'CV', 'Download CV')
				}
			>
				Download CV
			</a>
			<a
				href='#contact'
				className='btn btn-primary'
				onClick={() =>
					analyticsClickEvent(
						'contact',
						'Btn click',
						'top contact btn',
						'contact'
					)
				}
			>
				Contact
			</a>
		</div>
	);
};

export default CTA;
