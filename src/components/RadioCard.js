import React, { useState, useEffect } from "react"
import '../home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGlobalContext } from './Context'

const RadioCard = () => {
	const {
		setUrl,
		selected,
		setSelected,
	} = useGlobalContext();

	const onChange = e => {
		setSelected(e.target.value)
		console.log(e.target.value)
	}

	useEffect(() => {
		selected === 'Single'
			?
			setUrl('https://www.poolstat.net.au/livestream/multimatch?api=1&ids=')
			:
			setUrl('https://www.poolstat.net.au/livestream/multimatch?api=1&drid=')
	}, [selected, setUrl])

	return (
		<form className='radio-container'>
			<div className='card'>
				<input
					type='radio'
					name='select'
					id='Rmu'
					value='Rmu'
					checked={selected === 'Rmu'}
					onChange={onChange}
				/>
				<div className='radio-card-icon'>
					{
						(selected === 'Rmu') ? <FontAwesomeIcon icon='fa-solid fa-circle-check fa-2x' /> : <div></div>
					}
				</div>
				<label className='radio-text-title' htmlFor='Rmu'>
					<div className='radio-card-icon'>
					</div>
					<h5 className='radio-card-label'>
						If Singles Knockout
					</h5>
					<h2 className='radio-card-label-description'>
						<span>If you are using the rmu link for scoring</span>
					</h2>
				</label>
			</div>
			<div className='card'>
				<input
					type='radio'
					name='select'
					id='Single'
					value='Single'
					checked={selected === 'Single'}
					onChange={onChange}
				/>
				<div className='radio-card-icon'>
					{
						(selected === 'Single') ? <FontAwesomeIcon icon='fa-solid fa-circle-check fa-2x' /> : <div></div>
					}
				</div>
				<label className='radio-text-title' htmlFor='Single'>
					<div className='radio-card-icon'>
					</div>
					<h5 className='radio-card-label'>
						Single-Scoreboard
					</h5>
					<h2 className='radio-card-label-description'>
						<span>Display only the main match score on the main scoreboard.</span>
					</h2>
				</label>
			</div>
			<div className='card'>
				<input
					type='radio'
					name='select'
					id='Multi'
					value='Multi'
					checked={selected === 'Multi'}
					onChange={onChange}
				/>
				<div className='radio-card-icon'>
					{
						(selected === 'Multi') ? <FontAwesomeIcon icon='fa-solid fa-circle-check' /> : <div></div>
					}
				</div>
				<label className='radio-text-title' htmlFor='Multi'>
					<div className='radio-card-icon'>
					</div>
					<h5 className='radio-card-label'>
						Multi-Scoreboard
					</h5>
					<h2 className='radio-card-label-description'>
						<span>Main scoreboard and Display another scoreboard
						with upto 6 other match scores.</span>
					</h2>
				</label>
			</div>
		</form>
	)
}

export { RadioCard }
