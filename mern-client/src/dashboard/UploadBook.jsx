import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';


const UploadBook = () => {
  const bookCategories=[
    "Fiction",
    "History",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Biography",
    "Romance",
    "Comedy",
    "Thriller",
    "Horror",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Art and Design"
  ]

  const[selectedBookCategory, setSelectedBookCategory]=useState(bookCategories[0])

  const handleChangeSelectedValue=(event)=>{
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)

  }

  //handle book submission
  const handleBookSubmit=(event=>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageUrl=form.imageUrl.value
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value
    const  bookPdfUrl=form.bookPdfUrl.value

    const bookObj={
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl
    }
    console.log(bookObj)

    //send data to db
    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(bookObj)
    }).then((res) => res.json()).then( data =>{
      alert("Book uploaded sucessfully")
      form.reset();
    })

  })
  return (
    <div className='px-4 my-12'>
<h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
<form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
      </div>
      </div>

      {/*second row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book Image URL" />
        </div>
        <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image URL" required />
      </div>

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id="inputState" name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </Select>
      </div>
      </div>

      {/*Book desc */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Descrption" />
        </div>
        <Textarea id="bookDescription"  name="bookDescription" rows={5} placeholder="Book Description" required className='w-full' />
      </div>

{/*book pdf link */}
<div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
        </div>
        <TextInput id="bookPdfUrl" type="text" placeholder="Book Pdf Url" required name="bookPdfUrl" />
      </div>
      <Button type="submit" className='mt-5'>Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBook