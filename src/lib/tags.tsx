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

export function includedTagsFirst( tags, selectedTags ){
  return [ ...selectedTags, ...tags.filter(item => !selectedTags.includes(item))];
}