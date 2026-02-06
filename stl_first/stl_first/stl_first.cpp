
#include <iostream>
#include <vector>

using namespace std;

//to do: vector - implements container functionality
//placeback() puts an element at the end of the vector without creating a copy
//class, constructors, destructors
//clasa cu constructor implicit, destructor si constructor de copie care afiseaza cate un mesaj
//copia obiectului transis ca parametru

class vect_work
{
    string obj;

    vect_work(string obj) {
        string obj = obj;
    }

    vect_work(const vect_work  &obj1) { 
        obj = obj1.obj;
    };


    ~vect_work() {};
};

int main()
{

                                                    //vectors//

    vector<string> pets = { "cat", "tarantula", "hirondelle", "gecko" };

    for (string pet : pets)
        cout << pet << endl;

    cout << pets.front() << endl; //first
    cout << pets.back() << endl;  //last

    cout << pets.at(0) << endl;   //first array element
    
    pets[0] = "cats";              /*changes the[i]/(i) element*/    pets.at(0) = "cats";
    cout << pets[0] << endl;                                         cout << pets.at(0) << endl;



}

