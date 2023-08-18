export function getUniqueTags( posts ){
  if(!posts){
    return [];
  }
  return posts.reduce(
    (acc, item) => {
      if(!item.tags){
        console.log('error in ',item.id);
        return acc;
      }
      return [...acc, ...item.tags.filter(tag => !acc.includes(tag))];},[]
  )
}