import React from 'react'

const Forum = () => {
  return (
    <div class="grid grid-cols-3 gap-4 p-6">
      <div className="container mx-auto my-5">
        <div class="bg-white border-2 border-[#CF5841] rounded-lg shadow-md p-4 mb-4"> 

          <div class="flex justify-between mb-4">
            <div class="flex justify-center items-center gap-2">
              <img src="" alt="profile" />
              <p class="font-semibold text-gray-800">Username</p>
            </div>
          </div>

          <p class="text-gray-700 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          <div>
            <p class="font-semibold text-black-800 mt-5">Tags</p>

            <div class="flex justify-between w-full mt-1 mb-5">
              <ul className='flex justify-center items-center gap-2'>
                    <div class="border rounded-lg p-1 bg-[#F97700]/40">
                      <p class="text-center text-[#F97700]">Food</p>
                    </div>

                    <div class="border rounded-lg p-1 bg-[#F54748]/40">
                      <p class="text-center text-[#F54748]">Health</p>
                    </div>

                    <div class="border rounded-lg p-1 bg-[#19A6B6]/40">
                      <p class="text-center text-[#19A6B6]">Place to go</p>
                    </div>
                </ul>
            </div>
          </div>

          <hr />
          
          <div class="flex justify-between w-full mt-4">
            <div class="flex items-center">
              <ul class="flex justify-center items-center gap-5">
                <li><button>
                  <box-icon type='solid' name='like' color='#CF5841'></box-icon>
                </button></li>

                <li><button>
                  <box-icon name='dislike' type='solid' color='#CF5841'></box-icon>
                </button></li>

                <li><button>
                  <box-icon name='chat' type='solid' color='#CF5841'></box-icon>
                  </button></li>
              </ul>
            </div>

            <div class="flex items-center">
              <button>
                <div class="border-2 rounded-lg border-[#CF5841] p-1 w-32">
                  <p class="text-center">Open</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>    

    

  )
}

export default Forum