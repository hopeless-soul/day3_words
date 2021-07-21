let sentence  = "maecenas id neque id eros gravida pretium id in diam Suspendisse volutpat orci nec ligula pellentesque eget convallis tortor pretium Donec vitae elit porta gravida sapien id fringilla nulla Phasellus quis nisi nec tellus eleifend dignissim Suspendisse convallis diam vel consequat venenatis orci erat volutpat est et efficitur neque metus in turpis Praesent sodales mi ac lorem rutrum vel ultricies ligula accumsan Ut malesuada condimentum magna volutpat iaculis eros bibendum sed";
let words = sentence.toLocaleLowerCase().split(" ");
let wordFrequency = {};


words.forEach(word => {
    word in wordFrequency ? wordFrequency[word] += 1 : wordFrequency[word] = 1;
});

//NOTE: Sort wordFrequency by descending.
let sortable = [];
for ( let word in wordFrequency ) {
    sortable.push([word, wordFrequency[word]]);
}
sortable.sort( (a,b)=> b[1]-a[1] );

//NOTE: Output result.
console.log(sortable);