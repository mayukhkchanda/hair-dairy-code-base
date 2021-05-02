# **Hair Dairy App Code Base**

## The code base for the Hair Dairy app made as a part of Quinn Front-End Hiring challenge.

# The github pages demo link: https://mayukhkchanda.github.io/hair-dairy/

- Key Points:

  - The app is built using React JS and is best viewed in mobile phones.

  - I've used a json file to store the images links and all the relevant data. The images used are from Unsplash.com.

  - Used Redux Store design to avoid props drilling problem. This also leaves room for quick addition of new posts using appropriate actions and reducers.

  - Used custom hooks and intersection api to determine which photo was in view port to apply relevant css styles.

- Project Structure
  - public/ - Contains _index.html_ and publicly accessible assets.
  - src/
    - components/
      - imggalary/ - Contains Components required for Images/Post gallary show.
        - ImageGallary.js - The images/posts slider/gallary component
        - ImageCard.js - Each of the image/post card to be displayed inside the ImageGallay component.
      - Calendar.js - The Calendar component including months and weekdays header.
      - TopHeader.js - The Sticky top header component that is the _my hair dairy_ header.
      - CalendarBody.js - Each of the individual month rendered inside the Calendar component.
      - Row.js - Each of the Rows(i.e. individual weeks) for each month.
      - Cell.js - Each individual Cell(i.e. days) inside the Row component.
      - Star.js - Creates a list of 5 stars icons with n(1<= n <=5) icons colored blue.
      - RoundedText.js - Reusable component for Rounded button like text displayed underneath each image and in image posts.
      - The css for each of the file is named accordingly.
    - hooks/ - Contains custom hooks
      - onVisible.js - custom hook that uses _useState_, _useEffect_ hooks and _Intersection Observer API_ of browsers to detect if an element is inside the view port.
    - actions/ - Exports actions that Reducers can operate on. Also, exports the type of actions available.
      - imageSelected - Returns an action object to be dispatched when an image/post is selected
      - gotImageRef - Returns an action object to be dispatched when an image/post node corresponding to the selected image is found.
      - newImageAdded - Returns an action object to be dispatched when an image/post is added.
      - currentMonthRefAct - Returns an action object to be dispatched when current month DOM node is found
    - reducers/ - reducers for Redux
      - index.js - Exports all the combined reducers to be passed to Redux store
      - ImageSelectionReducer.js - Modifies the state when user clicks on a particular image/post with the object of the selected image.
      - ImageRefReducer.js - Modifies the state with the reference to the particular image/post DOM node after it is rendered on the screen. This helps in scrolling to the particular image/post user clicked on after the gallary is rendered.
      - ImageAddedReducer.js - Modifies the state when user creates a particular post. Adding posts/images is not implemented, thus used the existing json data for simulation.
      - CurrentMonthReducer.js - Modifies the state with the running month DOM node for scrolling to it when rendered.
    - App.js - Component that renders the Calander on the screen. When user clicks on an image renders Image/Posts Gallary on screen.
    - Data.json - used to store dummy data for demo. Essentially a dictionary structed data with keys as individual date(in dd-mm-yyyy format) and values as the image/post object for that day.
    - index.js - renders App to the root DOM element.
