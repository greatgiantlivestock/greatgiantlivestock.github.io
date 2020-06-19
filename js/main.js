const url = '../uploads/template.pdf';
let pdfDoc = null,
pageNum = 1,
pageIsRendering = false,
pageNumIsPending = null;

const scale = 1,
canvas = document.querySelector('#pdf-render'),
ctx = canvas.getContext('2d');

//Render the page
const renderPage = num =>{
    pageIsRendering = true;
    // get page
    pdfDoc.getPage(num).then(page => {
        // console.log(page);
        const viewport = page.getViewport({ scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderCtx = {
            canvasContext: ctx, 
            viewport
        }
        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;
            if(pageNumIsPending !== null){
                renderPage(pageNumIsPending)
                pageNumIsPending = null;

            }
        });
        document.querySelector('#page-num').textContent = num;
    })
};

// Check for page rendering
const queueRenderPage = num => {
    if(pageIsRendering){
        pageNumIsPending = num;
    }else{
        renderPage(num);
    }
};

//show prev page
const showPrevPage = () => {
    if(pageNum <= 1){
        return;
    }
    pageNum--;
    queueRenderPage(pageNum)
};
//show next page
const showNextPage = () => {
    if(pageNum >= pdfDoc.numPages){
        return;
    }
    pageNum++;
    queueRenderPage(pageNum)
};
// Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    // console.log(pdfDoc);
    document.querySelector('#page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum)
})
    .catch(err => {
        // display error
        const div = document.createElement('div');
        div.className = 'error';
        // div.appendChild(document.createTextNode(err.message));
        div.appendChild(document.createTextNode("File not found, please contact IT Application Support team.."));
        document.querySelector('body').insertBefore(div, canvas);
        //Remove top bar
        document.querySelector('.top-bar').style.display = 'none';
    });

// button events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);