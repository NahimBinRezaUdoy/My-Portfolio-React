import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {ImTrello} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nahim-bin-reza-udoy/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/NahimBinRezaUdoy" target="_blank"><AiFillGithub/></a>
        <a href="https://trello.com/nahimbinrezaudoy1/boards" target="_blank"><ImTrello/></a>
    </div>
  )
}

export default HeaderSocials