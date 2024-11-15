function makeFriendsList(friends) {
  const list = document.createElement('ul');
  
  for (let friend of friends) {
    let item = document.createElement('li');
    item.textContent = `${friend.firstName} ${friend.lastName}`;
    list.append(item);
  }

  return list;
}
