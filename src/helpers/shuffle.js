/**************
 ***Shuffle will handle the reshuffling of the sublists to add diversity tot the match generation
 *** PARAMS--- sublist Array (i.e. pLA or pLB )
 ***
 */
const shuffle = arr => {
  arr.sort(() => Math.random() - 0.5);

  return arr;
};

export default shuffle;
