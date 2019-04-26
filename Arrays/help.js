if (head == NULL) {
    return newNode;
}

if (position == 0) {
   newNode->next = head;
   return newNode;
}

Node *currentNode = head;

    while(currentNode->next != NuLL && position - 1 > 0) {
    currentNode = currentNode->next;
    position--;
}

    if(currentNode ->next == NULL)
    {
        cout << "No element at position "<< position << endl;
        return;
    }

newNode->next = currentNode->next;
currentNode->next = newNode;

return head;