// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guesArr = ["Arman", "Rizwan raza", "Shazaib", "Shamir"];
var canNot = "Arman";
console.log(canNot + ' ' + "canNot make it, For dinner");
var newgues = "Bilal";
guesArr[guesArr.indexOf(canNot)] = newgues;
// console.log(guesArr)
guesArr.map(function (item) {
    return console.log("Dear ".concat(item, " You Are Cordinary invited to a Dinner"));
});
