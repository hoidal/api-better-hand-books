const fetch = require("node-fetch");
const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";

const fetchDetails = async (formattedIsbn) => {
  try {
    const response = await fetch(GOOGLE_BOOKS_URL + formattedIsbn);
    const data = await response.json();
    if (data.totalItems > 0) {
      const mostPopular = data.items.reduce((prev, current) => {
        return prev.volumeInfo.ratingsCount > current.volumeInfo.ratingsCount
          ? prev
          : current;
      });
      const bookData = mostPopular.volumeInfo;
      console.log(bookData);
      const bookObj = {
        hasDetails: true,
        isbn: formattedIsbn,
        title: bookData.title,
        author: bookData.authors,
        pageCount: bookData.pageCount,
        language: bookData.language,
        categories: bookData.categories,
        description: bookData.description,
        imageUrl: "https" + bookData.imageLinks.thumbnail.slice(4),
        maturityRating: bookData.maturityRating,
        publishedDate: bookData.publishedDate,
        publisher: bookData.publisher,
      };
      return bookObj;
    } else {
      return { hasDetails: false };
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  actions: {
    new: {
      before: async (request) => {
        const formattedIsbn = request.payload.isbn.replace(/\D+/g, "");
        const data = await fetchDetails(formattedIsbn);
        request.payload = {
          ...request.payload,
          ...data,
        };
        return request;
      },
    },
  },
  properties: {
    publisher: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    publishedDate: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    imageUrl: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    maturityRating: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    pageCount: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    categories: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    publishedDate: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    language: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    description: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
    hasDetails: {
      isVisible: {
        show: true,
        edit: false,
        list: true,
        filter: true,
      },
    },
  },
};

console.log(fetchDetails("0062502182"));
