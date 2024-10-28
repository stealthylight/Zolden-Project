import shutil,os
def find_reverse(string,tofind):
    index=-1
    temp=0
    for i in string:
        if(i==tofind):
            index=temp
        temp +=1
    if(index==-1):
        return LookupError
    return index
            

def bulk_rename(extension,*,directory=".",exception=[]):
    os.chdir(directory)
    counter=1
    for i in os.listdir():
        try:
            if(i[find_reverse(i,".")+1:].upper()==extension.upper() and exception.count(i)==0):
                os.rename(f"{directory}\\{i}",f"{directory}\\{counter}.{extension}")
                counter +=1
        except:
            counter +=1
            continue
        
bulk_rename("jpg",exception=["Backpack_background.JPG"])