import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id}=useParams();
  const {bookTitle, authorName,imageUrl, bookDescription, bookPdfUrl}=useLoaderData();
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

  //handle update
  const handleUpdate=(event=>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageUrl=form.imageUrl.value
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value
    const  bookPdfUrl=form.bookPdfUrl.value

    const updateBookObj={
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl
    }
    // console.log(bookObj)
    //update book data
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data =>
    {
      alert("Book updated successfully!")
  })

  })
  return (
    <div className='px-4 my-12'>
<h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
<form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" placeholder="Book name" required  type="text" defaultValue={bookTitle} />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required defaultValue={authorName} />
      </div>
      </div>

      {/*second row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book Image URL" />
        </div>
        <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image URL" required defaultValue={imageUrl} />
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
        <Textarea id="bookDescription"  name="bookDescription" rows={5} placeholder="Book Description" required className='w-full' defaultValue={bookDescription} />
      </div>

{/*book pdf link */}
<div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
        </div>
        <TextInput id="bookPdfUrl" type="text" placeholder="Book Pdf Url" required name="bookPdfUrl" defaultValue={bookPdfUrl} />
      </div>
      <Button type="submit" className='mt-5'>Update Book</Button>
    </form>
    </div>
  )
}

export default EditBooks