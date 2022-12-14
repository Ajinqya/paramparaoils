import { data } from 'autoprefixer'
import React from 'react'
import { BsBag } from 'react-icons/bs'
import ButtonGradient from '../Button/ButtonGradient'
import ButtonOutline from '../Button/ButtonOutline'
import Bag from "../../assets/images/bag.svg"
import Minus from "../../assets/images/minus.svg"
import Plus from "../../assets/images/Plus.svg"



const ItemCard = ({ onClick, addQuantity, removeQuantity, item, added, cart, addProduct }) => {



    return (
        <div className='w-[100%] p-[16px] rounded-[8px] bg-Neutral10 flex flex-col'>
            <div
                style={{
                    backgroundColor: item?.imgBg
                }}
                className={`aspect-square  rounded-[8px] w-[100%] flex justify-center items-center`}>
                <img src={item?.image} alt="Item" className='w-[100%] bg-transparent' />
            </div>
            <div className='description'>
                <div>
                    <div className="text-Small/Label/Large-Strong md:text-Medium+/Label/Large-Strong text-Neutral80 mt-[16px]">
                        {item?.name}
                    </div>
                    <div className='text-Neutral60 text-Small/Label/Medium md:text-Medium+/Label/Medium mt-[4px]'>
                        {item?.quantity}
                    </div>
                </div>

                <div className='mt-[16px]'>
                    <span className='text-Small/Label/Medium md:text-Medium+/Label/Medium text-Neutral80'>₹</span> <span className='text-Neutral80 text-Small/Title/Small md:text-Medium+/Title/Small'>{item?.price}</span>
                </div>

                <div className='mt-[16px]'>
                    {
                        added ?
                            <>

                                <div className='flex  gap-4 text-base'>
                                    <div
                                        onClick={() => { addProduct(`${item.name} ${item.quantity} has been removed from your bag`); removeQuantity(item?.id) }}
                                        className='h-[56px] min-w-[56px] border-[1px] border-Neutral50 rounded-[8px] text-Secondary70 relative bg-[#FFFFFF] flex items-center justify-center cursor-pointer hover:bg-Primary10'>
                                        <img src={Minus} alt="" />
                                    </div>

                                    <div className='w-[100%]  flex items-center justify-center border border-[#228B22]  rounded'>
                                        <div className="absolute h-[20px] w-[20px] bg-Primary80 flex items-center justify-center rounded-full text-Medium+/Paragraph/xSmall-Strong text-Neutral10  text-sm translate-x-[10px] -translate-y-[5px]">{cart.find(data => data.id == item.id).count}</div>
                                        <img src={Bag} alt="" />
                                    </div>
                                    <div
                                        onClick={() => { addProduct(`${item.name} ${item.quantity} has been added to your bag`); addQuantity(item?.id) }}
                                        className='h-[56px] min-w-[56px] border-[1px] border-Neutral50 rounded-[8px] text-Neutral10 relative highlighted-color grad-btn flex items-center justify-center cursor-pointer'>
                                        <img src={Plus} alt="" />
                                    </div>
                                </div>
                            </>
                            // <ButtonGradient onClick={onClick} title={"Add to Bag"} color={'#228B22'} textColor={'#228B22'} icon={<BsBag />} />
                            : <button onClick={onClick} className={`border-[2px] border-Primary60  text-Primary60 text-Small/Label/Large-Strong md:text-Medium+/Label/Large-Strong p-[16px] w-[100%] rounded-[8px] flex justify-center gap-[10px] items-center add_bag`}>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9999 2C10.2705 2 9.57106 2.28973 9.05534 2.80546C8.78391 3.07688 8.57508 3.39921 8.43814 3.75H13.5616C13.4247 3.39921 13.2159 3.07688 12.9444 2.80546C12.4287 2.28973 11.7292 2 10.9999 2ZM15.6434 3.75C15.4525 2.86335 15.0099 2.04248 14.3586 1.39124C13.4678 0.500445 12.2597 0 10.9999 0C9.7401 0 8.53192 0.500445 7.64112 1.39124C6.98988 2.04248 6.54728 2.86335 6.35632 3.75H2.08426L2.07811 3.75002C1.83259 3.75153 1.59014 3.80468 1.36651 3.90603C1.14288 4.00737 0.943078 4.15464 0.78009 4.33826C0.617102 4.52188 0.494576 4.73774 0.420475 4.97181C0.346512 5.20545 0.322445 5.45201 0.349826 5.69552C0.349877 5.69598 0.349929 5.69644 0.349981 5.69689L1.68098 17.6946L1.68253 17.7078C1.73531 18.1321 1.9408 18.5227 2.2606 18.8065C2.5804 19.0903 2.99261 19.248 3.42018 19.25L3.42488 19.25H18.5749L18.5796 19.25C19.0071 19.248 19.4194 19.0903 19.7392 18.8065C20.059 18.5227 20.2645 18.1321 20.3172 17.7078L21.6498 5.69689C21.6498 5.6971 21.6498 5.69669 21.6498 5.69689C21.6773 5.45313 21.6533 5.20569 21.5793 4.97181C21.5052 4.73774 21.3827 4.52188 21.2197 4.33826C21.0567 4.15464 20.8569 4.00737 20.6333 3.90603C20.4096 3.80468 20.1672 3.75153 19.9217 3.75002L15.6434 3.75ZM2.36814 5.75L3.64392 17.25H18.3558L19.6316 5.75H2.36814Z" />
                                </svg>
                                Add to Bag
                            </button>
                    }

                </div>

            </div>
        </div>
    )
}

export default ItemCard