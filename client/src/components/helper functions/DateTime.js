// helper function that returns the current date and time. 
export default function formatTo12HourClock(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    return  {
        ampm,
        formattedTime: `${hours}:${minutes}:${seconds} ${ampm}`,
        formattedDate: `${month}-${day}-${year}`
      };
    }

  