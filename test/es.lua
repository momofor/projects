Layouts = {"ar" , "dvp" , "fr"}
I = 1

function ChangeLayout()
    CurrentLayout = Layouts[I]
    for index, value in ipairs (Layouts) do
        Max = index
    end
    if I < Max then
        I = I + 1
    else
        I = 1
    end
    return CurrentLayout
end

local class = {name = ""}

function class.init()
    setmetatable(self , class)
    self.__init = self
    self.name = name or ""
    print("name")
end


ChangeLayout()
ChangeLayout()
ChangeLayout()
ChangeLayout()
ChangeLayout()
ChangeLayout()
ChangeLayout()

--print(I)
--print(I)
--print(I)
--print(I)

--CurrentLayout = Layouts[I]
--function CountShit(I)
    --if CurrentLayout ~= nil then
        --I = I + 1
        --return CountShit(I+1)
    --end
--end

--CountShit(I)
--function ChangeLayout()
     --while CurrentLayout ~= nil do
        --print(CurrentLayout)
        --I = I + 1
    --end
    --CurrentLayout = Layouts[I]
    --return CurrentLayout
--end
--print( CountShit(I,CurrentLayout) )
--print( CountShit(I,CurrentLayout) )
--print( CountShit(I,CurrentLayout) )
--print( CountShit(I,CurrentLayout) )
--ChangeLayout()
--ChangeLayout()
--ChangeLayout()
--
--print(CountShit(I , CurrentLayout))

--function Sum2(accu, n)
  --if n > 0 then
    --accu.value = accu.value + n
    --return Sum2(accu, n-1) --< note the return here
  --end
--end
--local accu = {value = 0}
--Sum2(accu, 1000000)
--print(accu.value)
