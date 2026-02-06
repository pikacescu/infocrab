
#include <iostream>
#include <vector>
#include <string>
#include <map>

using namespace std;

//to do: vector - implements container functionality
//placeback() puts an element at the end of the vector without creating a copy
//class, constructors, destructors
//clasa cu constructor implicit, destructor si constructor de copie care afiseaza cate un mesaj
//copia obiectului transis ca parametru

class vect_work
{
public:

public:
    std::string msg;
    vect_work() {
        cout << "vect_work()" << endl;
    }
    vect_work(const std::string& str) {
        cout << "vect_work(const string& "<< str <<")" << endl;
        msg = str;
    }

    vect_work(const vect_work& obj1) {
        msg = obj1.msg;
        cout << "vect_work(const vect_work&) " << msg<< endl;
    };

    ~vect_work() { cout << "~vect_work() " << msg << endl; };
};

ostream& operator<< (ostream& os, vect_work& w)
{
    os << w.msg;
    return os;
}

int main_vector()
{
    ///*
    cout << "******************************** start *************************" << endl;
    vector <vect_work> cats;
    cats.reserve(5);
    cout << "size of cats: " << cats.size() << endl;


    std::string x = "tuxedo";
    for (int i = 0  ; i < 5; i++)
    {
        cout << "** before" << endl;
        cats.push_back({ x + std::to_string(i)});

        if (i == 4)
        {
            cats[i - 1].msg = "tabby";
            cout << cats[i - 1] << endl;
        }
        cout << "** after" << endl;
    }
    cout << "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" << endl;
    for (int i = 0; i < 5; i++)
        cout << cats[i] << endl;
    cout << "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" << endl; //*/
    for (std::vector<vect_work>::iterator it = cats.begin(); it != cats.end(); it++)
        cout << *it << endl;
    cout << "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" << endl; //*/
    for (std::vector<vect_work>::reverse_iterator it = cats.rbegin(); it != cats.rend(); it++)
        cout << *it << endl;
    cout << "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" << endl; //*/

    //cats.emplace_back() = "tuxedo";

    vector<string> pets = { "cat", "tarantula", "hirondelle", "gecko" };

    for (string pet : pets)
        cout << pet << endl;

    cout << pets.front() << endl; //first
    cout << pets.back() << endl;  //last

    cout << pets.at(0) << endl;   //first array element

    pets[0] = "cats";                                                pets.at(0) = "cats";
    cout << pets[0] << endl;                                         cout << pets.at(0) << endl;



    cout << "******************************** finish *************************" << endl;
    return 0;
}
int main()
{
    map<string, string>cat;
    std::pair<string, string> xxx = std::make_pair<string, string>("buzz", "bar");
    cat.insert(xxx);

    cat["Xayah"] = "Tuxedo";
    cat["Luna"] = "Black";
    cat["Markiz"] = "Tabby";
    cat["Xena_Mao"] = "Spider";

    for (auto c : cat)
    {
        //c.second = "qwertyu";
        if (c.first == "Xena_Mao")
            cout << c.first << " are " << "Spiders" << endl;
        else
            cout << c.first <<" is " << c.second << endl;
    }
    cout << "************************************************************" << endl;
    for (map<string, string>::iterator it = cat.begin(); it != cat.end(); it++)
    {
        cout << it->first << " " << it->second << " ";
        cout << (*it).first << " " << (*it).second << endl;
    }


    cout << "Ce pisica doresti sa verifici?" << endl;

    string x; cin >> x;


    //x = "Xena and Mao";
    if (x == "Xena_Mao")
        cout <<"Oops! " << x << " are " << cat.at(x);
    else
    cout << x << " is " << cat.at(x);
    return 0;
}

