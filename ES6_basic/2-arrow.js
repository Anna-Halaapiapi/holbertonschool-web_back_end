export default function getNeighborhoodsList() {
  // stores array in obj as a property
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;

  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
