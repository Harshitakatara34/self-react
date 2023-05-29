import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SideBar = () => {
    const [searchparams, setSearchparams] = useSearchParams()
    const initialCategory = searchparams.getAll("category")
    const initialGender = searchparams.getAll("gender")
    const initialOrder = searchparams.get("order")
    const [category, setCategory] = useState(initialCategory || [])
    const [gender, setGender] = useState(initialGender || [])
    const [order, setOrder] = useState(initialOrder || "")


    useEffect(() => {
        let params = {
            category,
            gender
        }
        order && (params.order = order)
        setSearchparams(params)
    }, [category, gender, order])


    const handleCategory = (e) => {
        const { value } = e.target
        let newCategory = [...category]
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el != value)
        } else {
            newCategory.push(value)
        }
        setCategory(newCategory)
    }


    const handleGender = (e) => {
        const { value } = e.target
        let newGender = [...gender]
        if (newGender.includes(value)) {
            newGender = newGender.filter((el) => el != value)
        } else {
            newGender.push(value)
        }
        setGender(newGender)
    }

    const handleSort=(e)=>{
        const {value}=e.target
setOrder(value)
    }
    return (
        <div>
            <div>
                <h4>Filter By Category</h4>
                <input type="checkbox" name='top-wear' value={"top-wear"}
                    onChange={handleCategory} defaultChecked={category.includes("top-wear")} />
                <label>Top Wear</label>
                <input type="checkbox" name='bottom-wear' value={"bottom-wear"} onChange={handleCategory} defaultChecked={category.includes("bottom-wear")} />
                <label>Bottom Wear</label>
                <input type="checkbox" name='shoes' value={"shoes"} onChange={handleCategory} defaultChecked={category.includes("shoes")} />
                <label>Shoes</label>
            </div>
            <br />
            <div>
                <h4>Filter By Gender</h4>
                <input type="checkbox" name="male" value="male" defaultChecked={gender.includes("male")} onChange={handleGender} />
                <label>Male</label>
                <input type="checkbox" name="female" value="female" defaultChecked={gender.includes("female")} onChange={handleGender} />
                <label>Female</label>
                <input type="checkbox" name="kids" value="kids" defaultChecked={gender.includes("kids")} onChange={handleGender} />
                <label>Kids</label>
            </div>
            <br />
            <br />
            <div>
                <h4>Sort By Price</h4>
                <div onChange={handleSort}>
                <input type="radio" name="order" value={"asc"}  />
                <label>ASC</label>
                <input type="radio" name="order" value={"desc"}/>
                <label>DESC</label>
                </div>
            </div>

        </div>
    )
}
