import os,shutil
def find_reverse(string,tofind):
    index=-1
    temp=0
    for dir in string:
        if(dir==tofind):
            index=temp
        temp +=1
    if(index==-1):
        return LookupError
    return index
            
def bulk_rename(extension,*,directory=".",exception=[]):
    counter=1
    for dir in os.listdir(directory):
        curr_dir = os.path.join(directory,dir)
        if(os.path.isdir(curr_dir)):
            bulk_rename(extension,directory=curr_dir)
        else:
            try:
                if(dir[find_reverse(dir,".")+1:].upper()==extension.upper() and exception.count(dir)==0):
                    os.rename(f"{directory}\\{dir}",f"{directory}\\{counter}.{extension}")
                    counter +=1
            except:
                counter +=1
                continue
currs = os.getcwd()
bulk_rename("jpg",directory=currs)
bulk_rename("jpeg",directory=currs)
