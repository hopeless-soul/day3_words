let sentence  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac pulvinar mi, vitae viverra nisi. Etiam blandit nulla eget placerat feugiat. Curabitur at nulla pretium, pellentesque turpis eu, facilisis erat. Duis eu turpis non lorem rhoncus imperdiet. Nunc ut semper justo, et malesuada erat. Maecenas ornare, risus eget consectetur venenatis, massa est pulvinar leo, a ultrices turpis elit a orci. Integer molestie congue ipsum, in rutrum nulla fringilla et. Maecenas ipsum nisl, vehicula quis ipsum sed, dignissim porttitor lorem. Morbi sagittis sit amet ante nec gravida. Maecenas non dignissim odio, sit amet posuere ligula. Vivamus porttitor leo eu laoreet tempor. Aenean nec erat sed augue sodales dignissim sit amet sed nisl. Cras ultrices ullamcorper lacus, in ullamcorper enim eleifend et. Nullam condimentum condimentum nibh id fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lectus at velit efficitur porttitor. Sed egestas arcu quis metus bibendum, sit amet hendrerit enim venenatis. Suspendisse euismod nisi nisi, sed pretium augue auctor sit amet. Vestibulum eget vestibulum risus. Curabitur felis mi, placerat at varius ac, consequat non leo. Sed tincidunt tempor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.Proin arcu ipsum, blandit sodales sapien a, euismod pulvinar risus. Donec rutrum vestibulum tortor, ut feugiat tellus posuere nec. Praesent eu convallis orci, eu euismod velit. Vivamus ut vehicula neque. Donec finibus non justo eu aliquet. Morbi metus eros, tincidunt in libero sed, dapibus tempus purus. Suspendisse purus urna, viverra eu mi at, consequat tincidunt augue. Donec placerat laoreet blandit.Cras lectus turpis, pretium et augue in, finibus pretium sapien. Maecenas nec est rhoncus, scelerisque metus eget, placerat libero. Nunc gravida, nibh at ornare semper, nibh ante suscipit velit, eu tristique nunc libero sit amet massa. Integer sagittis nulla ac tellus eleifend tincidunt. Cras commodo vulputate nibh et consectetur. Cras tempor dui et lacus placerat dapibus nec tempor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc laoreet auctor tellus. Aliquam rutrum pulvinar libero, eget convallis nulla pulvinar non. Suspendisse placerat fringilla massa, vel bibendum diam posuere et. In hac habitasse platea dictumst. Suspendisse vehicula tempus egestas. Proin vulputate, leo vitae suscipit fermentum, urna nisi tristique dolor, id placerat urna metus pellentesque orci.Nulla sollicitudin lorem vel laoreet porttitor. Pellentesque cursus condimentum diam, non rutrum tellus efficitur id. Morbi consectetur blandit sapien, nec tincidunt ligula. Nulla facilisi. Ut eu pharetra neque. Cras ut dolor vitae lorem sodales iaculis in ac nisl. Nam commodo accumsan ultricies. Aliquam pretium neque eros. Aenean fringilla convallis lacus quis ornare. Phasellus ultricies justo tortor. Pellentesque nec auctor turpis, et placerat risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nulla non dolor venenatis pulvinar eget non leo. Nam quis orci mollis, vestibulum nunc vitae, hendrerit lacus. Nullam cursus eget odio in cursus. ";
sentence = sentence.split('')
    .map((lt)=>{return lt.toLocaleLowerCase()})
    .map((lt)=>{return lt === "." ? "" : lt })
    .map((lt)=>{return lt === "," ? "" : lt })
    .join('');


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
