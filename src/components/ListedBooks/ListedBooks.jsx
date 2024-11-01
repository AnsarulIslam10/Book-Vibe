import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";
const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();
    useEffect(()=>{
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(storedReadListInt)
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList)

    },[])

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold">Books I read {readList.length}</h2>
          <h2>
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </h2>
        </TabPanel>
        <TabPanel>
        <h2 className="text-2xl font-bold">My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
