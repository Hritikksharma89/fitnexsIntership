import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-scroll'

const ButtonGradient = ({ actionRequired = '', onClick, WhiteButton }) => {
    return (
        <>
            <Link to="book-appointment" smooth>
                <button
                    onClick={onClick}
                    className={classNames(
                        'h-auto w-auto bg-white text-[#000] rounded-[6px]   font-semibold p-4 px-5 text-[14px] ',

                        {
                            'bg-gradient-to-r from-[#39063F] from-2.3% via-[#7C3057] via-72.44% to-[#602639] to-97.51% text-[#fff] rounded-2xl':
                                !WhiteButton,
                        }
                    )}
                >
                    {actionRequired}
                </button>
            </Link>
        </>
    )
}

export default ButtonGradient
