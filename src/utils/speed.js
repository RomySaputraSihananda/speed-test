const runSpeedTest = async () => {
  const fileSizeInMB = 1;
  const fileUrl = "https://pbs.twimg.com/media/F7u3iB-boAAzYT9.jpg";

  try {
    const startTime = new Date().getTime();
    const response = await fetch(fileUrl);
    const data = await response.arrayBuffer();
    const endTime = new Date().getTime();
    const downloadSpeed = parseFloat(
      (fileSizeInMB / ((endTime - startTime) / 1000)).toFixed(2)
    );

    const uploadStartTime = new Date().getTime();
    const formData = new FormData();
    formData.append("file", new Blob([data]));

    await fetch(fileUrl, { method: "POST", body: formData });

    const uploadEndTime = new Date().getTime();
    const uploadSpeed = parseFloat(
      (fileSizeInMB / ((uploadEndTime - uploadStartTime) / 1000)).toFixed(2)
    );

    return {
      downloadSpeed,
      uploadSpeed,
    };
  } catch (error) {
    throw new Error("Error dalam speed test: " + error);
  }
};

const speedtest = async () => {
  try {
    let upload = 0;
    let download = 0;
    // for (let i = 0; i < 3; i++) {
    const { downloadSpeed, uploadSpeed } = await runSpeedTest();
    //   download += downloadSpeed;
    //   upload += uploadSpeed;
    // }
    // return {
    //   updoad: parseFloat((upload / 3).toFixed(2)),
    //   download: parseFloat((download / 3).toFixed(2)),
    // };

    return {
      updoad: uploadSpeed,
      download: downloadSpeed,
    };
  } catch (error) {
    console.error(error);
  }
};

export default speedtest;
